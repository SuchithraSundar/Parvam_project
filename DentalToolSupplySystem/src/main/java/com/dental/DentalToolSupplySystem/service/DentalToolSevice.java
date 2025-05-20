package com.dental.DentalToolSupplySystem.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dental.DentalToolSupplySystem.dto.DentalToolDTO;
import com.dental.DentalToolSupplySystem.model.DentalTool;
import com.dental.DentalToolSupplySystem.repository.DentalToolRepository;


@Service
public class DentalToolSevice {

		private DentalToolRepository dentaltoolRepository;
		private PasswordEncoder passwordEncoder;
		
		public DentalToolSevice(DentalToolRepository dentaltoolRepository, PasswordEncoder passwordEncoder) {
			super();
			this.dentaltoolRepository = dentaltoolRepository;
			this.passwordEncoder = passwordEncoder;
		}
		
		public void storeUser(DentalToolDTO dentaltoolDTO)
		{
			DentalTool dental = new DentalTool();

			dental.setName(dentaltoolDTO.getName());
			dental.setEmail(dentaltoolDTO.getEmail());
			System.out.println(dentaltoolDTO.getPassword());
			dental.setPassword(passwordEncoder.encode(dentaltoolDTO.getPassword()));
//			if (dentaltoolDTO.getRole() != null && 
//			        (dentaltoolDTO.getRole().equals("ROLE_ADMIN") || dentaltoolDTO.getRole().equals("ROLE_SUPPLIER") || dentaltoolDTO.getRole().equals("ROLE_USER"))) {
//			        dental.setRole(dentaltoolDTO.getRole());
//			    } else {
//			        dental.setRole("ROLE_USER"); 
//			    }
			System.out.println("role: "+dentaltoolDTO.getRole());
			if(dentaltoolDTO.getRole().equals("") || dentaltoolDTO.getRole().equals(null)) {
				dental.setRole("ROLE_USER"); 
			}
			else {
				dental.setRole(dentaltoolDTO.getRole());
			}
		dentaltoolRepository.save(dental);
			
			dentaltoolRepository.save(dental);
		}

		
}
