import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
export declare class BreadcrumbService {
    private router;
    private route;
    breadcrumbs: Observable<Array<Object>>;
    private _breadcrumbs;
    constructor(router: Router, route: ActivatedRoute);
}
