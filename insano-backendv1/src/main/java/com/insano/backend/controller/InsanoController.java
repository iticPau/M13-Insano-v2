package com.insano.backend.controller;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
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
import com.insano.backend.model.UsuarioProducto;
import com.insano.backend.repository.EmpresaRepository;
import com.insano.backend.repository.ProductoRepository;
import com.insano.backend.repository.UsuarioProductoRepository;
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
    
    @Autowired
    private UsuarioProductoRepository usuarioProductoRepository;
	
    @GetMapping("/getAllUsuarios")
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }
    
    @GetMapping("/user/login")
    public ResponseEntity<Usuario> findByUsernameAndPassword(
            @RequestParam String usuario,
            @RequestParam String password) {

        Optional<Usuario> userOptional = usuarioRepository.findByUsuario(usuario);
        if (userOptional.isPresent()) {
            Usuario user = userOptional.get();
            //Verifica si la contraseña en texto plano coincide con el hash almacenado
            if (BCrypt.checkpw(password, user.getPassword())) {
                return ResponseEntity.ok(user);
            }
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping("/user/registro")
    public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
    	usuario.setPassword(BCrypt.hashpw(usuario.getPassword(), BCrypt.gensalt()));
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
    
    @GetMapping("/productos/nombre")
    public ResponseEntity<List<Producto>> getProductosPorNombre(@RequestParam String nombre) {
        List<Producto> productos = productoRepository.findByNombreContainingIgnoreCase(nombre);
        return ResponseEntity.ok(productos);
    }
    
    @GetMapping("/productos/categoria")
    public ResponseEntity<List<Producto>> getProductosByCategoria(@RequestParam String categoria) {
        List<Producto> productos = productoRepository.findByCategoria(categoria);
        return ResponseEntity.ok(productos);
    }
	
    @PostMapping("/compra/registrar")
    public ResponseEntity<UsuarioProducto> registrarCompra(@RequestBody UsuarioProducto compraRequest) {
    	
    	UsuarioProducto usuarioProducto = usuarioProductoRepository.save(compraRequest);
        System.out.println("Registrando compra: " + compraRequest);
        return new ResponseEntity<>(usuarioProducto, HttpStatus.CREATED);
    }
    
}
