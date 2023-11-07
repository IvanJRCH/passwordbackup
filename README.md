# passwordbackup
Gestor de contraseñas - Guarda tus contraseñas de forma segura con mi algoritmo<br>

<b>Modo de trabajo del algoritmo</b><br>
1 - La contraseña que elijas se convierte a sha256<br>
2 - Se usa el sha256 para ofuscar los datos guardados agregando al azar redundancia al principio y al final con una suma simple por cada caracter del hash<br>
3 - De modo que internamente quedaria algo a si: (Redundancia)-(Datos)-(Redundancia)<br>
4 - El algoritmo sha256 le entrega una capa de seguridad a este algoritmo<br>
<br>
Modo de uso<br>
1 - la contraseña debe ser larga para evitar ataques de fuerza bruta<br>
<br>
Si te gusta este proyecto considera programar una extension para los navegadores para el 😅<br>
<br>
<br>
Password Manager -Save your passwords securely with my algorithm.<br>
<br>
<b>Algorithm working mode</b>:<br>
1 - The password you choose is converted to sha256.<br>
2 - The sha256 is used to obfuscate the stored data by randomly adding redundancy at the beginning and end, with a simple sum for each character of the hash.<br>
3 - So internally, it would look like this: (Redundancy)-(Data)-(Redundancy).<br>
4 - The sha256 algorithm adds an extra layer of security to this algorithm.<br>
<br>
How to use:<br>
1 - The password should be long to avoid brute force attacks.<br>
<br>
If you like this project, consider programming a browser extension for it. 😅
