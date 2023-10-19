import {confi} from '../confi/config'
import {Client,Databases,ID,Storage,Query} from 'appwrite'

export class Service{
    client=new Client();
    databases;
    bukets;

    constructor(){
        this.client
        .setEndpoint(confi.appWriteUrl)
        .setProject(confi.appWriteProjectId);

        this.databases=new Databases()
        this.bukets=new Storage()
    }

    async createPost({title,slug,content,featuredImage,status,userID}){
        try {
            return await this.databases.createDocument(confi.appWriteDatabaseId,confi.appWriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userID
            })
        } catch (error) {
            console.log(("Appwrite serive :: createPost :: error",error));
        }
    }

    async updatePost(slug,{title,content,featuredImage,status,userID}){
        try {
            return await this.databases.updateDocument(confi.appWriteDatabaseId,confi.appWriteCollectionId,slug,{
                title,
                content,
                featuredImage,
                status,
                userID
            })
        } catch (error) {
            console.log(("Appwrite serive :: updatePost :: error",error));
        }
    }


    async deletePost(slug){
        try {
            await this.databases.deleteDocument(confi.appWriteDatabaseId,confi.appWriteCollectionId,slug)
            return true;
        } catch (error) {
            console.log(("Appwrite serive :: deletePost :: error",error));
            return false
        }
    }

    async getPost(slug){
        try {
            await this.databases.getDocument(confi.appWriteDatabaseId,confi.appWriteCollectionId,slug)
            return true;
        } catch (error) {
            console.log(("Appwrite serive :: deletePost :: error",error));
           return false
        }
    }


    async getPosts(queries=[Query.equal("status","active")]){
    try {
        await this.databases.listDocuments(confi.appWriteDatabaseId,confi.appWriteCollectionId,queries) 
    } catch (error) {
        console.log(("Appwrite serive :: getPosts :: error",error));
        return false;
    }
    }

    async uploadFiles(File){
        try {
            await this.bukets.createFile(confi.appWriteBuketId,ID.unique(),File)
            return true
        } catch (error) {
            console.log(("Appwrite serive :: uploadFiles :: error",error));
            return false
        }
    }
    
    async deleteFile(fileId){
        try {
            await this.bukets.deleteFile(confi.appWriteBuketId,fileId)
            return true
        } catch (error) {
            console.log(("Appwrite serive :: deleteFiles :: error",error));
            return false
        }
    
    }
}

const service=new Service();

export default service;