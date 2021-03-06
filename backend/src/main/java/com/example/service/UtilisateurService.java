package com.example.service;

import java.util.List;

import com.example.model.Utilisateur;


public interface UtilisateurService {

    public List<Utilisateur> getAllUtilisateurs();

    public Utilisateur update(Utilisateur utilisateur);

    public void delete(Long id);

    public Utilisateur create(Utilisateur utilisateur);

    public Utilisateur findById(Long id);

    public Utilisateur getByCode(String code);

    public Boolean hasAccount(String code);

    public Utilisateur getByUsername(String username);

    public Utilisateur ActivateAccount(Boolean active, String code);
}
