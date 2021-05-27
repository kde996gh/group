import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  CollectionReference,
  Query,
} from '@angular/fire/firestore';
import { Group } from '../models/group';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseCrudService {
  groups = [];
  constructor(private afs: AngularFirestore) {}

  get(collectionName: string): Observable<Group[]> {
    return this.afs
      .collection(collectionName, (ref) => {
        let query: CollectionReference | Query = ref;
        query = query.orderBy('name', 'asc');
        return query;
      })
      .valueChanges() as Observable<Group[]>;
  }


  async add(data: Group) {
    const generatedId = this.afs.createId();
    data.id = generatedId;
    await this.afs.collection('Groups').doc(generatedId).set(data);
  }

  weakAdd(collectionName: string, data: Group) {
    this.afs.collection(collectionName).add(data);
  }

  getById(collectionName: string, id: string): Observable<any> {
    return this.afs.collection(collectionName).doc(id).valueChanges();
  }

  update(collectionName: string, id: string, data: any) {
    return this.afs.collection(collectionName).doc(id).update(data);
  }

  async delete(id: string) {
    await this.afs.collection('Groups').doc(id).delete().then(()=>{
      console.log("Delete is successful")
    }, err => {
      console.warn(err);
    });;
  }
}
