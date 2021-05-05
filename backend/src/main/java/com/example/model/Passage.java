package com.example.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@Entity
public class Passage{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long passage_id;

    private Long centre_fort_id;

    private String cen_societe_id;

    private String etablissement_id;

    private String societe_id;

    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate passage_date;



}