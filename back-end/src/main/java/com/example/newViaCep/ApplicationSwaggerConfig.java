package com.example.newViaCep;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * 
 * @author Fabricio
 *
 */

@Configuration
@EnableSwagger2
@ComponentScan(basePackages = "com.example.newViaCep.rest")
public class ApplicationSwaggerConfig {
	
	 @Bean
	   public Docket customDocket(){
	      return new Docket(DocumentationType.SWAGGER_2)
	    		  .select()
	              .apis(RequestHandlerSelectors.any())
	              .paths(PathSelectors.any())
	              .build();
	              
	   }
}
