package com.dental.DentalToolSupplySystem.dto;

public class DentalToolDTO {
	
	private String firstname;
	private String lastname;
	private String dob;
	private String gender;
	private String email;
	private String password;
	private String confirmpassword;
	
	// getters and setters
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
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
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
	
	//tostring
	@Override
	public String toString() {
		return "DentalToolDTO [firstname=" + firstname + ", lastname=" + lastname + ", dob=" + dob + ", gender="
				+ gender + ", email=" + email + ", password=" + password + ", confirmpassword=" + confirmpassword + "]";
	}
	
	
	
}
