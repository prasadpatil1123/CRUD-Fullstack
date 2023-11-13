package com.learncrudoperation.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learncrudoperation.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
