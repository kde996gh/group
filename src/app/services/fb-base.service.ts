import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Group } from '../models/group';

@Injectable({
  providedIn: 'root',
})
export class FbBaseService {
  constructor(private afs: AngularFirestore) {}

  async add(collectionName: string, data: Group, id?: string): Promise<String> {
    // kell a visszatérés?
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  weakAdd(collectionName: string, data: Group) {
    this.afs.collection(collectionName).add(data);
  }

}
