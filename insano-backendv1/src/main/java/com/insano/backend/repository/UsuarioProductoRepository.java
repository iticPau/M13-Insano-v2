package com.insano.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.insano.backend.model.UsuarioProducto;

@Repository
public interface UsuarioProductoRepository extends JpaRepository<UsuarioProducto, Long> {

}
