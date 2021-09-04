package com.example.newViaCep.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.acessingCepDB.entity.CepEntity;
import com.example.newViaCep.entity.AddressEntity;
import com.example.newViaCep.repository.AddressRepository;
/**
 * 
 * @author Chrystian Rocha
 *
 */
@RestController
@CrossOrigin
@RequestMapping("api/addresses/")
public class AddressRestController {

	@Autowired
	AddressRepository repository;

	@GetMapping("zip/{zipCode}")
	public AddressEntity getAddress(@PathVariable String zipCode) {
		return repository.findByZipCode(zipCode);
	}
	
	@GetMapping("zip")
	public List<AddressEntity> getAllAddress() {
		System.out.println(repository.findAll());
		return repository.findAll();
	}
	
	@PostMapping("/add")
	public AddressEntity addNewCep(@RequestBody AddressEntity cep) {
		return repository.save(cep);
	}
}