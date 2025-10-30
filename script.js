const books = [
  {id:1,title:"Atomic Habits",author:"James Clear",category:"Self-help",isbn:"9780735211292",cover:"assets/covers/book1.jpg",available:true},
  {id:2,title:"Rich Dad Poor Dad",author:"Robert Kiyosaki",category:"Finance",isbn:"9781612680194",cover:"assets/covers/book2.jpg",available:true},
  {id:3,title:"1984",author:"George Orwell",category:"Fiction",isbn:"9780451524935",cover:"assets/covers/book3.jpg",available:true},
  {id:4,title:"To Kill a Mockingbird",author:"Harper Lee",category:"Classic",isbn:"9780061120084",cover:"assets/covers/book4.jpg",available:true},
  {id:5,title:"The Great Gatsby",author:"F. Scott Fitzgerald",category:"Classic",isbn:"9780743273565",cover:"assets/covers/book5.jpg",available:true},
  {id:6,title:"The 7 Habits of Highly Effective People",author:"Stephen R. Covey",category:"Motivational",isbn:"9780743269513",cover:"assets/covers/book6.jpg",available:true},
  {id:7,title:"The Power of Now",author:"Eckhart Tolle",category:"Spiritual",isbn:"9781577314806",cover:"assets/covers/book7.jpg",available:true},
  {id:8,title:"Deep Work",author:"Cal Newport",category:"Productivity",isbn:"9781455586691",cover:"assets/covers/book8.jpg",available:true},
  {id:9,title:"Start With Why",author:"Simon Sinek",category:"Leadership",isbn:"9781591842804",cover:"assets/covers/book9.jpg",available:true},
  {id:10,title:"The Odyssey",author:"Mark Manson",category:"Self-help",isbn:"9780062457714",cover:"assets/covers/book10.jpg",available:true},
  {id:11,title:"Becoming",author:"Michelle Obama",category:"Biography",isbn:"9781524763138",cover:"assets/covers/book11.jpg",available:true},
  {id:12,title:"Think and Grow Rich",author:"Napoleon Hill",category:"Finance",isbn:"9780449214923",cover:"assets/covers/book12.jpg",available:true},
  {id:13,title:"The Alchemist",author:"Paulo Coelho",category:"Fiction",isbn:"9780062315007",cover:"assets/covers/book13.jpg",available:true},
  {id:14,title:"Can't Hurt Me",author:"David Goggins",category:"Motivational",isbn:"9781544512280",cover:"assets/covers/book14.jpg",available:true},
  {id:15,title:"The Intelligent Investor",author:"Benjamin Graham",category:"Finance",isbn:"9780060555665",cover:"assets/covers/book15.jpg",available:true},
  {id:16,title:"Sapiens",author:"Yuval Noah Harari",category:"History",isbn:"9780099590088",cover:"assets/covers/book16.jpg",available:true},
  {id:17,title:"Dune",author:"Frank Herbert",category:"Science Fiction",isbn:"9780441172719",cover:"assets/covers/book17.jpg",available:true},
  {id:18,title:"The Catcher in the Rye",author:"J.D. Salinger",category:"Classic",isbn:"9780316769488",cover:"assets/covers/book18.jpg",available:true},
  {id:19,title:"The Lean Startup",author:"Eric Ries",category:"Business",isbn:"9780307887894",cover:"assets/covers/book19.jpg",available:true},
  {id:20,title:"Educated",author:"Tara Westover",category:"Memoir",isbn:"9780399590504",cover:"assets/covers/book20.jpg",available:true}
];

const bookList = document.getElementById('book-list');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');

function displayBooks(list){
  bookList.innerHTML = '';
  list.forEach(b=>{
    const div=document.createElement('div');
    div.className='book-card';
    div.innerHTML=`<img src="${b.cover}" alt="${b.title}" style="width:100%;height:200px;object-fit:cover;border-radius:8px;">
                   <h3>${b.title}</h3><p>${b.author}</p>`;
    div.onclick=()=>openPopup(b);
    bookList.appendChild(div);
  });
}

// Initial display
if(bookList){ displayBooks(books); }

// Search function
if(searchInput){
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.toLowerCase();
    const filtered = books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q) ||
      b.isbn.includes(q)
    );
    displayBooks(filtered);
  });
}

// Sort function
if(sortSelect){
  sortSelect.addEventListener('change', () => {
    const sortBy = sortSelect.value;
    if(!sortBy){ displayBooks(books); return; }
    const sorted = [...books].sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
    displayBooks(sorted);
  });
}


function openPopup(b){
  document.getElementById('book-popup').style.display='flex';
  document.getElementById('popup-cover').src=b.cover;
  document.getElementById('popup-title').textContent=b.title;
  document.getElementById('popup-author').textContent=b.author;
  document.getElementById('popup-category').textContent=b.category;
  document.getElementById('popup-isbn').textContent=b.isbn;
  document.getElementById('popup-availability').textContent=b.available?"Available":"Not Available";
}

function closePopup(){
  document.getElementById('book-popup').style.display='none';
}

// ISSUE / RETURN SECTION
const formArea=document.getElementById('form-area');
if(formArea){
  document.getElementById('issue-btn').onclick=()=>{
    formArea.innerHTML=`
      <h3>Issue Book</h3>
      <input type='text' placeholder='Book ID'>
      <input type='text' placeholder='User ID'>
      <input type='date'>
      <button onclick="showReport()">Submit</button>
    `;
  };
  document.getElementById('return-btn').onclick=()=>{
    formArea.innerHTML=`
      <h3>Return Book</h3>
      <input type='text' placeholder='Book ID'>
      <input type='text' placeholder='User ID'>
      <button onclick="showPaymentSuccess()">Submit</button>
    `;
  };
}

function showReport(){
  document.getElementById('report-popup').style.display='flex';
  document.getElementById('total-users').textContent=10;
  document.getElementById('total-borrowed').textContent=5;
}

function generatePDF(){
  alert('PDF Generated Successfully!');
}
function generateExcel(){
  alert('Excel Report Generated!');
}

function showPaymentSuccess(){
  document.getElementById('payment-popup').style.display='flex';
  setTimeout(()=>document.getElementById('payment-popup').style.display='none',3000);
}

// ADMIN DASHBOARD
const dashboard=document.getElementById('dashboard-content');
if(dashboard){
  document.getElementById('user-btn').onclick=()=>dashboard.innerHTML=`<h3>Users Logged In: 5</h3><p>Last Login: 30-Oct-2025</p>`;
  document.getElementById('books-btn').onclick=()=>dashboard.innerHTML=`<h3>Books Available: ${books.filter(b=>b.available).length}</h3>`;
  document.getElementById('payments-btn').onclick=()=>dashboard.innerHTML=`<h3>Payments Made: 4</h3><p>Total Amount: KES 1,200</p>`;
}
