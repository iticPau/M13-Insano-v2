package com.insano.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario_producto")
public class UsuarioProducto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private Integer id;

    @Column(name = "nombre_usuario", length = 50)
    private String nombreUsuario;

    @Column(name = "id_producto")
    private Integer idProducto;

    @Column(length = 50)
    private String fecha;

    private Integer cantidad;

    @Column(name = "precio_total")
    private float precioTotal;

    public UsuarioProducto() {
    }

    public UsuarioProducto(Integer id, String nombreUsuario, Integer idProducto, String fecha, Integer cantidad, float precioTotal) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.idProducto = idProducto;
        this.fecha = fecha;
        this.cantidad = cantidad;
        this.precioTotal = precioTotal;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombreUsuario() {
        return nombreUsuario;
    }

    public void setNombreUsuario(String nombreUsuario) {
        this.nombreUsuario = nombreUsuario;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public float getPrecioTotal() {
        return precioTotal;
    }

    public void setPrecioTotal(float precioTotal) {
        this.precioTotal = precioTotal;
    }

    @Override
    public String toString() {
        return "UsuarioProducto{" +
                "id=" + id +
                ", nombreUsuario='" + nombreUsuario + '\'' +
                ", idProducto=" + idProducto +
                ", fecha='" + fecha + '\'' +
                ", cantidad=" + cantidad +
                ", precioTotal=" + precioTotal +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        UsuarioProducto that = (UsuarioProducto) o;

        if (Float.compare(that.precioTotal, precioTotal) != 0) return false;
        if (!id.equals(that.id)) return false;
        if (!nombreUsuario.equals(that.nombreUsuario)) return false;
        if (!idProducto.equals(that.idProducto)) return false;
        if (!fecha.equals(that.fecha)) return false;
        return cantidad.equals(that.cantidad);
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + nombreUsuario.hashCode();
        result = 31 * result + idProducto.hashCode();
        result = 31 * result + fecha.hashCode();
        result = 31 * result + cantidad.hashCode();
        result = 31 * result + (precioTotal != +0.0f ? Float.floatToIntBits(precioTotal) : 0);
        return result;
    }
}
