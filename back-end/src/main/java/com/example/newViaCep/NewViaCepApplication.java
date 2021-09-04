package com.example.newViaCep;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class NewViaCepApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewViaCepApplication.class, args);
	}
	
	/*@Bean
	public CommandLineRunner demo(AddressRepository repository) {

		return (args) -> {
			// save a few customers
			repository.save(new AddressEntity("94935410", "Rua Lídio Batista Soares"));
			repository.save(new AddressEntity("90010170", "Praça Montevidéo"));
			repository.save(new AddressEntity("01001000", "Praça da Sé"));
		};
	
	}*/
}