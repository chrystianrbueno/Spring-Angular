package com.example.newViaCep.rest;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
/**
 * 
 * @author Chrystian Rocha
 *
 */
@SpringBootTest
@AutoConfigureMockMvc
class AddressRestControllerTest {

	@Autowired
	MockMvc mvc;
	
	@Test
	public void testShouldReturnAdress() throws Exception {
		mvc.perform(MockMvcRequestBuilders
				.get("/api/addresses/zip/94935410"))
					.andExpect(status().isOk())
					.andExpect(content().contentType(MediaType.APPLICATION_JSON))
					.andExpect(jsonPath("$.Logradouro").value("Rua Lídio Batista Soares"));
	}


}