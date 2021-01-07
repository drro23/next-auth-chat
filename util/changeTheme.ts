export default function changeTheme(isDark) {
  const html = document.querySelector('html');

  // New way of detecting if the user have already his web-browser using a dark theme
  // window.matchMedia('(prefers-color-scheme: dark)').matches
  if (!html.classList.contains("dark") && isDark ) {
    document.querySelector('html').classList.add("dark");
  } else if (html.classList.contains("dark") && !isDark) {
    document.querySelector('html').classList.remove("dark");
  }
}