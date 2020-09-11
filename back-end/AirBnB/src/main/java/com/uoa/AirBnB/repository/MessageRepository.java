package com.uoa.AirBnB.repository;

import com.uoa.AirBnB.model.messageModel.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByListingId(Long id);
    List<Message> findByGuestId(Long id);
}