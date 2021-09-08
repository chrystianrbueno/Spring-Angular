package com.example.newViaCep.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.example.newViaCep.rest.JacksonCustomAddressEntityDeserializer;
import com.example.newViaCep.rest.JacksonCustomAddressEntitySerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * 
 * @author Fabricio
 *
 */

@Entity
@Table(name = "addresses")
@JsonSerialize(using = JacksonCustomAddressEntitySerializer.class)
@JsonDeserialize(using = JacksonCustomAddressEntityDeserializer.class)
public class AddressEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "public_place")
	private String publicPlace;
	@Column(name = "zip_code")
	private String zipCode;
	@Column(name = "complement")
	private String complement;
	@Column(name = "district")
	private String district;
	@Column(name = "location")
	private String location;
	@Column(name = "federative_Unit")
	private String federativeUnit;

	public AddressEntity() {
	}

	public AddressEntity(String zipCode, String publicPlace, 
			             String complement, String district,
			             String location, String federativeUnit) {
		super();
		this.publicPlace = publicPlace;
		this.zipCode = zipCode;
		this.complement = complement;
		this.district = district;
		this.location = location;
		this.federativeUnit = federativeUnit;
	}

	public Long getId() {
		return id;
	}

	public String getPublicPlace() {
		return publicPlace;
	}

	public void setPublicPlace(String publicPlace) {
		this.publicPlace = publicPlace;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}
	
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getFederativeUnit() {
		return federativeUnit;
	}

	public void setFederativeUnit(String federativeUnit) {
		this.federativeUnit = federativeUnit;
	}

	@Override
	public String toString() {
		return "AddressEntity [id=" + id + ", publicPlace=" + publicPlace + ", zipCode=" + zipCode + ", complement="
				+ complement + ", district=" + district + ", location=" + location + ", federativeUnit="
				+ federativeUnit + "]";
	}
	
}
