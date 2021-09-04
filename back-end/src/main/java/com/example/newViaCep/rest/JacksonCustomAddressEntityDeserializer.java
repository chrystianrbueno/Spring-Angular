package com.example.newViaCep.rest;

import java.io.IOException;

import com.example.newViaCep.entity.AddressEntity;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

/**
 * 
 * @author Chrystian Rocha
 *
 */
public class JacksonCustomAddressEntityDeserializer extends StdDeserializer<AddressEntity> {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3413827126625189247L;

	public JacksonCustomAddressEntityDeserializer() {
		this(null);
	}

	public JacksonCustomAddressEntityDeserializer(Class<AddressEntity> t) {
		super(t);
	}

	@Override
	public AddressEntity deserialize(JsonParser parser, DeserializationContext context)
			throws IOException, JsonProcessingException {
		
		JsonNode node = parser.getCodec().readTree(parser);
		AddressEntity address = new AddressEntity();
		String zipCode = node.get("Cep").asText(null);
		String publicPlace = node.get("Logradouro").asText(null);
		String complement = node.get("Complemento").asText(null);
		String district = node.get("Bairro").asText(null);
		String location = node.get("Localidade").asText(null);
		String federativeUnit = node.get("UF").asText(null);
		
		address.setZipCode(zipCode);
		address.setPublicPlace(publicPlace);
		address.setComplement(complement);
		address.setDistrict(district);
		address.setLocation(location);
		address.setFederativeUnit(federativeUnit);
		
		return address;
	}

}
