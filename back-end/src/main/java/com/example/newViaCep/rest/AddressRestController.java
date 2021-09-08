package com.example.newViaCep.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.newViaCep.entity.AddressEntity;
import com.example.newViaCep.repository.AddressRepository;

/**
 * 
 * @author Chrystian Rocha
 *
 */
@RestController
@RequestMapping("api/addresses/zip")
@CrossOrigin
public class AddressRestController {

	@Autowired
	AddressRepository repository;

	@GetMapping("/{zipCode}")
	public AddressEntity getAddress(@PathVariable String zipCode) {
		return repository.findByZipCode(zipCode);
	}
	
	@GetMapping()
	public List<AddressEntity> getAllAddress() {
		System.out.println(repository.findAll());
		return repository.findAll();
	}
	
	@GetMapping("/id/{id}")
	public AddressEntity getAddressById(@PathVariable long id){
		return repository.findById(id);
	}
	
	
	@PostMapping("/add")
	public AddressEntity addNewCep(@RequestBody AddressEntity cep) {
		System.out.println(cep);
		AddressEntity addressFront = repository.findByZipCode(cep.getZipCode());
		if(addressFront == null) {
			return repository.save(cep);
		}else {
			return null;
		}
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable long id){
		repository.deleteById(id);
	}
}