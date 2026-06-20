import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Productos() {
    const contenedor = document.getElementById('productos');

    class Producto {
        #precio;
        #stock;

        constructor(nombre, marca, precio, stock, imagen) {
            this.nombre = nombre;
            this.marca = marca;
            this.precio = precio;
            this.stock = stock;
            this.imagen = imagen;
        }

        descripcion() {
            return `${this.nombre} — ${this.marca}`;
        }

        set precio(valor) {
            if (valor <= 0) {
                console.log(`Precio Inválido: ${valor}`);
            }
            this.#precio = valor;
        }

        get precio() {
            return this.#precio
        }

        set stock(valor) {
            if (valor <= 0) {
                console.log(`Stock Inválido: ${valor}`);
            }
            this.#stock = valor;
        }

        get stock() {
            return this.#stock
        }

        get estaDisponible() {
            return this.stock > 0;
        }

        get precioFormateado() {
            return `$${this.precio.toLocaleString('es-AR')}`;
        }

        resumen() {
            const disponible = this.estaDisponible ? `${this.stock} en stock` : 'Sin stock';
            return `${this.descripcion()} | ${this.precioFormateado} | ${disponible}`;
        }

        fichaTecnica() {
            return `${this.nombre} - ${this.marca}`
        }
    }


    class Notebook extends Producto {
        constructor(nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB, pantallaPulgadas) {
            super(nombre, marca, precio, stock, imagen,)
            this.procesador = procesador;
            this.ramGB = ramGB;
            this.almacenamientoGB = almacenamientoGB;
            this.pantallaPulgadas = pantallaPulgadas;
        };

        fichaTecnica() {
            return `${this.nombre} | ${this.marca} | ${this.procesador} | ${this.ramGB} | ${this.almacenamientoGB} | ${this.pantallaPulgadas}`
        }
    }



    class Celular extends Producto {
        constructor(nombre, marca, precio, stock, imagen, pantallaPulgadas, bateriaMah, camaraMp, almacenamientoGB) {
            super(nombre, marca, precio, stock, imagen,)
            this.pantallaPulgadas = pantallaPulgadas;
            this.bateriaMah = bateriaMah;
            this.camaraMp = camaraMp;
            this.almacenamientoGB = almacenamientoGB;
        }

        fichaTecnica() {
            return `${this.nombre} | ${this.marca} | ${this.pantallaPulgadas} | ${this.bateriaMah} | ${this.camaraMp} | ${this.almacenamientoGB}`
        }
    }

    class Auricular extends Producto {
        constructor(nombre, marca, precio, stock, imagen, tipo, wireless, cancelacionRuido) {
            super(nombre, marca, precio, stock, imagen,)
            this.tipo = tipo;
            this.wireless = wireless;
            this.cancelacionRuido = cancelacionRuido;
        }

        fichaTecnica() {
            return `${this.nombre} | ${this.marca} | ${this.tipo} | ${this.wireless} | ${this.cancelacionRuido}`
        }
    }

    class Monitor extends Producto {
        constructor(nombre, marca, precio, stock, imagen, pulgadas, resolucion, panelTipo, hz) {
            super(nombre, marca, precio, stock, imagen,)
            this.pulgadas = pulgadas;
            this.resolucion = resolucion;
            this.panelTipo = panelTipo;
            this.hz = hz;
        }

        fichaTecnica() {
            return `${this.nombre} | ${this.marca} | ${this.pulgadas} | ${this.resolucion} | ${this.panelTipo} | ${this.hz}`
        }
    }

    class PCEscritorio extends Producto {
        constructor(nombre, marca, precio, stock, imagen, procesador, ramGB, almacenamientoGB, placaVideo, fuenteW) {
            super(nombre, marca, precio, stock, imagen,)
            this.procesador = procesador;
            this.ramGB = ramGB;
            this.almacenamientoGB = almacenamientoGB;
            this.placaVideo = placaVideo;
            this.fuenteW = fuenteW;
        }

        fichaTecnica() {
            return `${this.nombre} | ${this.marca} | ${this.procesador} | ${this.ramGB} | ${this.almacenamientoGB} | ${this.placaVideo} | ${this.fuenteW}`
        }
    }

    // ── Renderizado ───────────────────────────────────────────────
    function crearTarjeta(producto) {
        const article = document.createElement('article');
        article.className = producto.estaDisponible ? 'tarjeta' : 'tarjeta sin-stock';

        const img = document.createElement('img');
        img.src = producto.imagen; img.alt = producto.nombre; img.loading = 'lazy';

        const info = document.createElement('div');
        info.className = 'tarjeta-info';

        const h3 = document.createElement('h3');
        h3.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.className = 'precio';
        precio.textContent = producto.precioFormateado;

        const ficha = document.createElement('p');
        ficha.className = 'ficha';
        ficha.textContent = producto.fichaTecnica();

        const btn = document.createElement('button');
        btn.textContent = producto.estaDisponible ? 'Agregar al carrito' : 'Sin stock';
        btn.disabled = !producto.estaDisponible;

        const btnDetalle = document.createElement('button');
        btnDetalle.textContent = 'Ver detalle';
        btnDetalle.className = 'btn-detalle';

        // el window.location.href se refiere a la ventana actual. si le asigno un valor distinto,
        // me redirige a ese nuevo valor
        btnDetalle.addEventListener('click', () => {
            window.location.href = `producto.html?id=${producto.id}`;
        });

        info.appendChild(h3);
        info.appendChild(precio);
        info.appendChild(ficha);
        info.appendChild(btn);
        info.appendChild(btnDetalle);

        article.appendChild(img);
        article.appendChild(info);
        return article;
    }


}

export default Productos;