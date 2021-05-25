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
  constructor(private afs: AngularFirestore) {}

  get(collectionName: string): Observable<Group[]> {
    return this.afs
      .collection(collectionName, (ref) => {
        let query: CollectionReference | Query = ref;
        query = query.orderBy('resourceType', 'asc');
        return query;
      })
      .valueChanges() as Observable<Group[]>;
  }

  async add(collectionName: string, data: Group, id?: string): Promise<String> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
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

  delete(collectionName: string, id: string) {
    return this.afs.collection(collectionName).doc(id).delete();
  }
}
