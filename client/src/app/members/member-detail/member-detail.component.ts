import { Component, inject, OnInit, signal } from '@angular/core';
import { MembersService } from '../../_services/members.service';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../../_models/member';

@Component({
  selector: 'app-member-detail',
  imports: [],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  private memberService = inject(MembersService);
  private route = inject(ActivatedRoute);
  member?: Member;
  activeTab = signal('About');

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');

    if (!username) {
      return;
    }

    this.memberService.getMember(username).subscribe({
      next: (member) => (this.member = member),
    });
  }

  onTabClick(tab: string) {
    this.activeTab.set(tab);
  }
}
