let firebaseConfig = {
  apiKey: "AIzaSyBW6LYiRfKHpjIefBwPnZqwUHlLVSo_BVU",
  authDomain: "action-blog.firebaseapp.com",
  projectId: "action-blog",
  storageBucket: "action-blog.appspot.com",
  messagingSenderId: "23019457228",
  appId: "1:23019457228:web:3cfbe83d8cd738e1ca9069"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}