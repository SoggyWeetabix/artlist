package com.artlist.artlist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artlist.artlist.models.Artist;

public interface ArtistRepository extends JpaRepository<Artist, Long> {
	
	Artist findByName(String name);

}
