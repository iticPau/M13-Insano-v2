package com.insano.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 50)
    private String nombre;

    @Column(length = 50)
    private String descripcion;

    @Column(length = 50)
    private String caracteristicas;

    @Column(length = 50)
    private String precio;

    @Column(length = 50)
    private String categoria;
    
    @Column(length = 200)
    private String imagen;
    
    @Column(length = 11)
    private int cantidad;

	public Producto(Integer id, String nombre, String descripcion, String caracteristicas, String precio,
			String categoria, String imagen, int cantidad) {
		super();
		this.id = id;
		this.nombre = nombre;
		this.descripcion = descripcion;
		this.caracteristicas = caracteristicas;
		this.precio = precio;
		this.categoria = categoria;
		this.imagen = imagen;
		this.cantidad = cantidad;
	}
	
	

	public Producto() {
		super();
		// TODO Auto-generated constructor stub
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

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public String toString() {
		return "Producto [id=" + id + ", nombre=" + nombre + ", descripcion=" + descripcion + ", caracteristicas="
				+ caracteristicas + ", precio=" + precio + ", categoria=" + categoria + ", imagen=" + imagen
				+ ", cantidad=" + cantidad + "]";
	}
    
    
}
