package com.insano.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 50)
    private String nombre;

    @Column(length = 500)
    private String descripcion;

    @Column(length = 500)
    private String caracteristicas;

    @Column(length = 50)
    private String precio;

    @Column(length = 50)
    private String categoria;

    @Column(length = 200)
    private String imagen;

    @Column(length = 11)
    private float cantidad;

    public Producto() {
    }

    public Producto(Integer id, String nombre, String descripcion, String caracteristicas, String precio, String categoria, String imagen, float cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.caracteristicas = caracteristicas;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.cantidad = cantidad;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(String caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public String getPrecio() {
        return precio;
    }

    public void setPrecio(String precio) {
        this.precio = precio;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public float getCantidad() {
        return cantidad;
    }

    public void setCantidad(float cantidad) {
        this.cantidad = cantidad;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", caracteristicas='" + caracteristicas + '\'' +
                ", precio='" + precio + '\'' +
                ", categoria='" + categoria + '\'' +
                ", imagen='" + imagen + '\'' +
                ", cantidad=" + cantidad +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Producto producto = (Producto) o;

        if (Float.compare(producto.cantidad, cantidad) != 0) return false;
        if (!id.equals(producto.id)) return false;
        if (!nombre.equals(producto.nombre)) return false;
        if (!descripcion.equals(producto.descripcion)) return false;
        if (!caracteristicas.equals(producto.caracteristicas)) return false;
        if (!precio.equals(producto.precio)) return false;
        if (!categoria.equals(producto.categoria)) return false;
        return imagen.equals(producto.imagen);
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + nombre.hashCode();
        result = 31 * result + descripcion.hashCode();
        result = 31 * result + caracteristicas.hashCode();
        result = 31 * result + precio.hashCode();
        result = 31 * result + categoria.hashCode();
        result = 31 * result + imagen.hashCode();
        result = 31 * result + (cantidad != +0.0f ? Float.floatToIntBits(cantidad) : 0);
        return result;
    }
}
