# passwordbackup
Guarda tus contraseñas de forma segura con mi algoritmo

Modo de trabajo del algoritmo
1 - La contraseña que elijas se convierte a sha256
2 - Se usa el sha256 para ofuscar los datos guardados agregando al azar redundancia al principio y al final con una suma simple por cada caracter del hash
3 - De modo que internamente quedaria algo a si: (Redundancia)-(Datos)-(Redundancia)
4 - El algoritmo sha256 le entrega una capa de seguridad a este algoritmo

Modo de uso
1 - la contraseña debe ser larga para evitar ataques de fuerza bruta


Save your passwords securely with my algorithm.

Algorithm working mode:
1 - The password you choose is converted to sha256.
2 - The sha256 is used to obfuscate the stored data by randomly adding redundancy at the beginning and end, with a simple sum for each character of the hash.
3 - So internally, it would look like this: (Redundancy)-(Data)-(Redundancy).
4 - The sha256 algorithm adds an extra layer of security to this algorithm.

How to use:
1 - The password should be long to avoid brute force attacks.
