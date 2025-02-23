import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  projectId: '67b9d0e4000baca4a8b1',
  databaseId: '67b9d4fc0022ec105c96',
  userCollectionId: '67b9d53f003042865a7b',
  videoCollectionId: '67b9d56a002df49f54fa',
  storageId: '67b9d69900267ee13408'
};

const client = new Client();
client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount || !newAccount.$id) {
            throw new Error("Account creation failed");
        }

        const avatarUrl = avatars.getInitials(username);

        // Sign in the user
        await signIn(email, password);

        // Ensure correct key names match your database schema
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                account_id: newAccount.$id, // Ensure the key matches your database schema
                email: email,
                username: username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        console.error("Error in createUser:", error);
        throw new Error(error);
    }
}


// Sign In
export async function signIn(email, password) {
  try {
      return await account.createEmailPasswordSession(email, password);
  } catch (error) {
      throw new Error(error.message);
  }
}

// Get Account
export async function getAccount() {
  try {
      return await account.get();
  } catch (error) {
      throw new Error(error.message);
  }
}

// Get Current User
export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();
        if (!currentAccount) throw new Error("No account found");

        // Make sure the attribute name matches the database schema
        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal("account_id", currentAccount.$id)] // Changed from "accountId" to "account_id"
        );

        if (!currentUser || !currentUser.documents.length) {
            throw new Error("User document not found");
        }

        return currentUser.documents[0];
    } catch (error) {
        console.error("This is the error:", error);
        return null;
    }
}


// Sign Out
export async function signOut() {
  try {
      return await account.deleteSession("current");
  } catch (error) {
      throw new Error(error.message);
  }
}

// Upload File
export async function uploadFile(file, type) {
  if (!file) return;

  try {
      const uploadedFile = await storage.createFile(
          appwriteConfig.storageId,
          ID.unique(),
          file
      );
      return await getFilePreview(uploadedFile.$id, type);
  } catch (error) {
      throw new Error(error.message);
  }
}

// Get File Preview
export async function getFilePreview(fileId, type) {
  try {
      return type === "video"
          ? storage.getFileView(appwriteConfig.storageId, fileId)
          : storage.getFilePreview(appwriteConfig.storageId, fileId, 2000, 2000, "top", 100);
  } catch (error) {
      throw new Error(error.message);
  }
}

// Create Video Post
export async function createVideoPost(form) {
  try {
      const [thumbnailUrl, videoUrl] = await Promise.all([
          uploadFile(form.thumbnail, "image"),
          uploadFile(form.video, "video"),
      ]);

      return await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.videoCollectionId,
          ID.unique(),
          {
              title: form.title,
              thumbnail: thumbnailUrl,
              video: videoUrl,
              prompt: form.prompt,
              creator: form.userId,
          }
      );
  } catch (error) {
      throw new Error(error.message);
  }
}

// Get all video Posts
export async function getAllPosts() {
  try {
      return (await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.videoCollectionId
      )).documents;
  } catch (error) {
      throw new Error(error.message);
  }
}

// Get video posts created by user
export async function getUserPosts(userId) {
  try {
      return (await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.videoCollectionId,
          [Query.equal("creator", userId)]
      )).documents;
  } catch (error) {
      throw new Error(error.message);
  }
}

// Get video posts that match search query
export async function searchPosts(query) {
  try {
      const posts = await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.videoCollectionId,
          [Query.search("title", query)]
      );

      if (!posts) throw new Error("No posts found");
      return posts.documents;
  } catch (error) {
      throw new Error(error.message);
  }
}

// Get latest created video posts
export async function getLatestPosts() {
  try {
      return (await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.videoCollectionId,
          [Query.orderDesc("$createdAt"), Query.limit(7)]
      )).documents;
  } catch (error) {
      throw new Error(error.message);
  }
}
