export default function changeTheme() {
    const elHtml = document.getElementsByTagName('html')
    const darkTheme = localStorage.getItem('isDark')
    let isDark = false;

    if (elHtml[0].classList.contains('mode-dark') && darkTheme)
    {
        elHtml[0].classList.remove('mode-dark')
        isDark = false;
    }
    else
    {
        elHtml[0].classList.add('mode-dark')
        isDark = true;
    }

    localStorage.setItem('isDark', isDark.toString())
}