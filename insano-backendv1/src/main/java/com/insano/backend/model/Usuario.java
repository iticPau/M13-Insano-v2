package com.insano.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Integer id;

    @Column(length = 200)
    private String nombre;

    @Column(length = 200)
    private String apellidos;

    @Column(length = 200)
    private String usuario;

    @Column(length = 200)
    private String password;

    @Column(length = 200)
    private String email;

    @Column(length = 200)
    private String direccion;

    @Column(length = 200)
    private String telefono;
}
