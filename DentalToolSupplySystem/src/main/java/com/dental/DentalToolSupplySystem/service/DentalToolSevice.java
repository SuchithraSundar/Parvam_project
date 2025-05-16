package com.dental.DentalToolSupplySystem.service;

import com.dental.DentalToolSupplySystem.dto.DentalToolDTO;
import com.dental.DentalToolSupplySystem.model.DentalTool;
import com.dental.DentalToolSupplySystem.repository.DentalToolRepository;

public class DentalToolSevice {

		private DentalToolRepository dentaltoolRepository;
		private PasswordEncoder passwordEncoder;
		
		public DentalToolSevice(DentalToolRepository dentaltoolRepository, PasswordEncoder passwordEncoder) {
			super();
			this.dentaltoolRepository = dentaltoolRepository;
			this.passwordEncoder = passwordEncoder;
		}
		
		public void storeDentalTool(DentalToolDTO dentaltoolDTO) throws MessagingException {
			DentalTool dental = new DentalTool();

			dental.setName(dentaltoolDTO.getName());
			dental.setEmail(dentaltoolDTO.getEmail());
			dental.setPassword(passwordEncoder.encode(studentDTO.getPassword()));
			dental.setRole("ROLE_USER");
			dentaltoolRepository.save(dental);
		}
}
