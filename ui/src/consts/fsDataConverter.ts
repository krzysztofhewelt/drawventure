import { PartialWithFieldValue, QueryDocumentSnapshot } from 'firebase/firestore';

export const fsDataConverter = <T>() => ({
  toFirestore: (data: PartialWithFieldValue<T>) => data,
  fromFirestore: (snap: QueryDocumentSnapshot<T>) => snap.data(),
});
