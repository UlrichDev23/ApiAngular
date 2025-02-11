import { Component, OnInit } from '@angular/core';
import { Data } from '../data.interface';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  posts: Data | null = null;

  constructor(private route: ActivatedRoute, private service: DataService) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service
        .getPostById(+id)
        .subscribe((data: Data) => (this.posts = data));
    }
  }
}
