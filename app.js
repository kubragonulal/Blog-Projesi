// app.js

// Blog postları için başlangıç verisi
let posts = [
  { id: 1, title: "Node.js ile Blog Yapımı", content: "Bu yazıda Node.js ile blog nasıl yapılır öğreniyoruz." },
  { id: 2, title: "JavaScript Temelleri", content: "JavaScript dilinin temellerini öğrenelim." },
  { id: 3, title: "Asenkron Programlama", content: "Asenkron programlama hakkında temel bilgiler." }
];

// Postları sıralama fonksiyonu
function listPosts() {
  console.log("Blog Postları:");
  posts.forEach(post => {
    console.log(`ID: ${post.id} - Başlık: ${post.title}`);
    console.log(`İçerik: ${post.content}`);
    console.log('-------------------');
  });
}

// Yeni bir post ekleme fonksiyonu
function addPost(title, content) {
  const newPost = {
    id: posts.length + 1,
    title: title,
    content: content
  };
  posts.push(newPost);
  console.log('Yeni post eklendi!');
}

// Başlangıçta postları sıralıyoruz
listPosts();

// 5 saniye sonra yeni bir post ekliyoruz
setTimeout(() => {
  addPost("Yeni Başlangıçlar", "Yeni bir yazı ekliyoruz!");
  listPosts();
}, 5000);
