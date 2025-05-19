package com.dental.DentalToolSupplySystem.model;

import java.time.LocalDate;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")

public class DentalTool {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String firstname;
	private String lastname;
	private LocalDate dob;
	private String gender;
	private String email;
	private String password;
	private String confirmpassword;
	private String role;
	
	//no args
	public DentalTool() {
		super();
	}

	//full args
	public DentalTool(long id, String firstname, String lastname, LocalDate dob, String gender, String email,
			String password, String confirmpassword , String role) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.password = password;
		this.confirmpassword = confirmpassword;
		this.role =role;
	}

	//getters and setters
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmpassword() {
		return confirmpassword;
	}

	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	
	

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "DentalTool [id=" + id + ", firstname=" + firstname + ", lastname=" + lastname + ", dob=" + dob
				+ ", gender=" + gender + ", email=" + email + ", password=" + password + ", confirmpassword="
				+ confirmpassword + ", role=" + role + "]";
	}
	
	
	
	
	
	
}
