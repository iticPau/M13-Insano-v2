package com.insano.backend.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
    info = @Info(
        title = "API de Insano",
        version = "1.0",
        description = "Documentación de la API de Insano utilizando Springdoc OpenAPI",
        termsOfService = "http://tusitio.com/terms/",
        contact = @Contact(
            name = "Soporte de API",
            url = "http://insano.com/contacto",
            email = "soporte@insano.com"
        ),
        license = @License(
            name = "Apache 2.0",
            url = "http://www.apache.org/licenses/LICENSE-2.0.html"
        )
    ),
    servers = @Server(url = "http://localhost:8080", description = "Servidor Local")
)
public class OpenApiConfig {
    
}
