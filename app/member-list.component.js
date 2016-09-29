"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var member_component_1 = require('./member.component');
var member_service_1 = require('./member.service');
var MemberListComponent = (function () {
    function MemberListComponent(memberService) {
        this.memberService = memberService;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.subscribeMembers();
    };
    MemberListComponent.prototype.onMemberDeleted = function (member) {
        this.memberService.DeleteMember(member)
            .subscribe(function () { });
    };
    MemberListComponent.prototype.subscribeMembers = function () {
        var _this = this;
        this.memberService.getMember()
            .subscribe(function (res) { return _this.members = res; });
    };
    MemberListComponent = __decorate([
        core_1.Component({
            selector: 'member-list',
            directives: [member_component_1.MemberComponent],
            providers: [member_service_1.MemberService],
            templateUrl: 'app/member-list.component.html',
            styleUrls: ["app/member-list.component.css"]
        }), 
        __metadata('design:paramtypes', [member_service_1.MemberService])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;
