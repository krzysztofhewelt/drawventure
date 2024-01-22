export interface ClassifyImageRequest {
  image: Blob;
  taskId: string;
  time: string;
  userUid: string;
}

export interface ClassifyImageResponse {
  accuracy: number;
  score: number;
}
