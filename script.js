const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  // sidebar.classList.add("close", "hoverable");
  sidebar.classList.remove("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("dark")) {
    document.setI;
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// Script for table 

// $(document).ready(function() {
//   $('#example').DataTable({
//     //disable sorting on last column
//     // "columnDefs": [
//     //   { "orderable": false, "targets": 6 }
//     // ],
//     language: {
//       //customize pagination prev and next buttons: use arrows instead of words
//       'paginate': {
//         'previous': '<span class="fa fa-chevron-left"></span>',
//         'next': '<span class="fa fa-chevron-right"></span>'
//       },
//       //customize number of elements to be displayed
//       "lengthMenu": 'Show <select class="form-control input-sm">'+
//       '<option value="10">10</option>'+
//       '<option value="20">20</option>'+
//       '<option value="30">30</option>'+
//       '<option value="40">40</option>'+
//       '<option value="50">50</option>'+
//       '<option value="-1">All</option>'+
//       '</select> entries'
//     }
//   })  
// } );