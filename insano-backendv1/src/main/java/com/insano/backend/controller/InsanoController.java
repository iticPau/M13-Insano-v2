package com.insano.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.insano.backend.model.Empresa;
import com.insano.backend.model.Producto;
import com.insano.backend.model.Usuario;
import com.insano.backend.repository.EmpresaRepository;
import com.insano.backend.repository.ProductoRepository;
import com.insano.backend.repository.UsuarioRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/insano")
public class InsanoController {

	@Autowired
    private UsuarioRepository usuarioRepository;
	
	@Autowired
	private EmpresaRepository empresaRepository;

    @Autowired
    private ProductoRepository productoRepository;
	
    @GetMapping("/getAllUsuarios")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
    
    @GetMapping("/user/login")
    public ResponseEntity<Usuario> findByUsernameAndPassword(
            @RequestParam String usuario,
            @RequestParam String password) {

        return usuarioRepository.findByUsuarioAndPassword(usuario, password)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping("/user/registro")
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
        Usuario nuevoUsuario = usuarioRepository.save(usuario);
        return new ResponseEntity<>(nuevoUsuario, HttpStatus.CREATED);
    }
    
    @GetMapping("/empresa")
    public ResponseEntity<Empresa> getFirstEmpresa() {
        System.out.println("Buscando la primera empresa...");
        return empresaRepository.findFirstByOrderByIdAsc()
                .map(empresa -> {
                    System.out.println("Empresa encontrada: " + empresa);
                    return ResponseEntity.ok(empresa);
                })
                .orElseGet(() -> {
                    System.out.println("No se encontró ninguna empresa.");
                    return ResponseEntity.notFound().build();
                });
    }

    @GetMapping("/productos")
    public ResponseEntity<List<Producto>> getAllProductos() {
        List<Producto> productos = productoRepository.findAll();
        return ResponseEntity.ok(productos);
    }
	
}
