package com.artlist.artlist.controllers;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.artlist.artlist.models.Artist;
import com.artlist.artlist.repositories.ArtistRepository;

@RestController
@RequestMapping("/api/v1/")
public class ArtistsController 
{
	@Autowired
	private ArtistRepository artistRepository;
	
	@RequestMapping(value = "artist", method = RequestMethod.GET)
	public List<Artist> list()
	{
		return artistRepository.findAll();
	}
	
	@RequestMapping(value = "artist", method = RequestMethod.POST)
	public Artist create(@RequestBody Artist art)
	{
			return artistRepository.saveAndFlush(art);
	}
	
	@RequestMapping(value = "artist/{id}", method = RequestMethod.GET)
	public Artist get(@PathVariable long id)
	{
		return artistRepository.getOne(id);
	}
	
	@RequestMapping(value="artist/{id}", method = RequestMethod.PUT)
	public Artist update(@PathVariable Long id, @RequestBody Artist art)
	{
		Artist existingArtist = artistRepository.getOne(id);
		BeanUtils.copyProperties(art, existingArtist);
		return artistRepository.saveAndFlush(existingArtist);
	}
	
	@RequestMapping(value="artist/{id}", method = RequestMethod.DELETE)
	public Artist delete(@PathVariable long id)
	{
		Artist existingArtist = artistRepository.getOne(id);
		artistRepository.delete(existingArtist);
		return existingArtist;
	}
	
	@RequestMapping(value="artist/byName/{name}", method = RequestMethod.GET)
	public Artist byName(@PathVariable(value="name") String name)
	{
		return artistRepository.findByName(name);
	}
	
}
