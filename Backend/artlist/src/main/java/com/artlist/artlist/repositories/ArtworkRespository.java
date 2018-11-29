package com.artlist.artlist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artlist.artlist.models.Artwork;

public interface ArtworkRespository extends JpaRepository<Artwork, Long> {

}
