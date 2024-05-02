package com.insano.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
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
}
