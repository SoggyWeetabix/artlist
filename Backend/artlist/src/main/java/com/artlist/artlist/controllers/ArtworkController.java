package com.artlist.artlist.controllers;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.artlist.artlist.models.Artwork;
import com.artlist.artlist.repositories.ArtworkRespository;

@RestController
@RequestMapping("/api/v1/")
public class ArtworkController 
{
	@Autowired
	private ArtworkRespository artworkRespository;
	
	@RequestMapping(value = "artwork", method = RequestMethod.GET)
	public List<Artwork> list()
	{
		return artworkRespository.findAll();
	}
	
	@RequestMapping(value = "artwork", method = RequestMethod.POST)
	public Artwork create(@RequestBody Artwork art)
	{
		return artworkRespository.saveAndFlush(art);
	}
	
	@RequestMapping(value="artwork/{id}", method = RequestMethod.GET)
	public Artwork get(@PathVariable long id)
	{
		return artworkRespository.getOne(id);
	}
	
	@RequestMapping(value="artwork/{id}", method = RequestMethod.PUT)
	public Artwork update(@PathVariable Long id, @RequestBody Artwork art)
	{
		Artwork existingArtwork = artworkRespository.getOne(id);
		BeanUtils.copyProperties(art, existingArtwork);
		return artworkRespository.saveAndFlush(existingArtwork);
	}
	
	@RequestMapping(value="artwork/{id}", method = RequestMethod.DELETE)
	public Artwork delete(@PathVariable long id)
	{
		Artwork existingArtwork = artworkRespository.getOne(id);
		artworkRespository.delete(existingArtwork);
		return existingArtwork;
	}
	
	
	
	
}
