var text:
text = `
vi --> vim _fork->neovim

# modo comando

ins o i = para insertar
esc = salir del modo
: = para ingresar comandos
:w = guardar cambios
:w <nombre de archivo> = esto crea un archivo identico en la misma ruta
:e = permite abrir otro archivo (ojo guardar cambio)
:q = cerrar el documento
:!q = cerrar sin guardar cambios
:e para abrir otro archivo
# : permite ingresar comandos tipo bash como cd ls pwd

# modo visual

hjkl = para desplazarse

w = desplaza al inicio de la siguiente palabra
e = desplaza al final de la siquiente palabra
b = desplaza al inicio de la palabra anterior

i = inserta texto delante del caracter
a = inserta texto despues del caracter
I = inseta texto al inicio de la linea
A = inserta texto al final de la linea
x = en modo navegación elimina el caracter posterior
X = elimina el caracter posterior
d = espera otra orden
d d = borra toda la linea
D = borra desde ese punto hasta adelante
d 0 = borra desde ese punto hasta el inicio
0 o inicio = inicio de la linea
$ o fin = fin de la linea
v = seleciona texto por donde pases
V = la linea completa
v d = elimina el texto seleccionado
# tambien hay alternativas
# en vez de "d+0" puede ser "v+0+d"
u = para desacer cambios
control + r = rehacer cambios
y = copiar
p = pega despues del lugar
P = pega antes del lugar


sdiu fhudoijsdoifjoe
c
hola mundo
fposd jp´dskfpo  dskfpo dskfpo dskfpodskfpodskfpo dskfpo dskfpo dskfpo dskfposdskfpodskfpodskfpdskfpdskfpoood kjfp
hola mundo
hola mundo
Vsdlfkjds ioifhisufjoie dsiufhiew uhfiewu suifhewiu fhieu iu fiewu fhiuew hf
hola mundo

hola mundo
hola mundo

#Identación

> = mueve a la derecha
>+% = mueve un bloque completo a la derecha
< = a la izquierda
<+% = mueve un bloque completo a la izquierda
tab = tambien identa a la derecha
****
gg=G = corrigue todo el documento
***



`
console.log(text)
