package org.fontysvenlo.issuetracker;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface IssueRepository extends JpaRepository<Issue, Long> {
    Collection<Issue> findByCategory(String category);
}
