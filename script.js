function showPage(pageId) {
  const pages = ['home','about','services','contact'];
  pages.forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById(pageId).style.display = 'block';
}