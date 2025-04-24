package com.example.demo.dog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/dogs")
@CrossOrigin(origins = "http://localhost:3000")
public class DogController {
    @Autowired
    private DogService dogService;
    @Autowired
    private DogRepository dogRepository;

    @PostMapping(value = "/save")
    public ResponseEntity<?> saveOrUpdateDog(@RequestBody DogModel dogModel) {
        dogService.saveOrUpdateDog(dogModel);
        return new ResponseEntity("Dog added successfully", HttpStatus.OK);
    }
    @GetMapping(value = "/")
    public List<DogModel> getAllDogs() {
        return dogService.findAll();
    }
    @DeleteMapping(value = "/delete/{dogNumber}")
    public ResponseEntity<?> deleteTravelByDogNumber(@PathVariable String dogNumber) {
        Optional<DogModel> dog=dogRepository.findById(dogNumber);
        dogService.deleteDogById(dogNumber);
        return new ResponseEntity("Dog deleted successfully", HttpStatus.OK);
    }
    @GetMapping(value = "/byBreed/{breed}")
    public DogModel getDogByBreed(@PathVariable("breed") String breed) {
        return dogService.findByBreed(breed);
    }
}
