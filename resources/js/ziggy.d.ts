/* This file is generated by Ziggy. */
declare module 'ziggy-js' {
  interface RouteList {
    "filament.exports.download": [
        {
            "name": "export",
            "binding": "id"
        }
    ],
    "filament.imports.failed-rows.download": [
        {
            "name": "import",
            "binding": "id"
        }
    ],
    "filament.admin.auth.login": [],
    "filament.admin.auth.logout": [],
    "filament.admin.pages.dashboard": [],
    "filament.admin.pages.addresses": [],
    "filament.admin.pages.profile": [],
    "filament.admin.resources.brands.index": [],
    "filament.admin.resources.brands.create": [],
    "filament.admin.resources.brands.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.categories.index": [],
    "filament.admin.resources.categories.create": [],
    "filament.admin.resources.categories.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.cities.index": [],
    "filament.admin.resources.cities.view": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.countries.index": [],
    "filament.admin.resources.countries.view": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.goods.index": [],
    "filament.admin.resources.goods.create": [],
    "filament.admin.resources.goods.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.orders.index": [],
    "filament.admin.resources.orders.create": [],
    "filament.admin.resources.orders.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.promo-codes.index": [],
    "filament.admin.resources.promo-codes.create": [],
    "filament.admin.resources.promo-codes.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.properties.index": [],
    "filament.admin.resources.properties.create": [],
    "filament.admin.resources.properties.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.reviews.index": [],
    "filament.admin.resources.reviews.create": [],
    "filament.admin.resources.reviews.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.settings.index": [],
    "filament.admin.resources.settings.create": [],
    "filament.admin.resources.settings.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.states.index": [],
    "filament.admin.resources.states.view": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.tags.index": [],
    "filament.admin.resources.tags.create": [],
    "filament.admin.resources.tags.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.users.index": [],
    "filament.admin.resources.users.create": [],
    "filament.admin.resources.users.edit": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.shield.roles.index": [],
    "filament.admin.resources.shield.roles.create": [],
    "filament.admin.resources.shield.roles.view": [
        {
            "name": "record"
        }
    ],
    "filament.admin.resources.shield.roles.edit": [
        {
            "name": "record"
        }
    ],
    "cashier.payment": [
        {
            "name": "id"
        }
    ],
    "cashier.webhook": [],
    "horizon.stats.index": [],
    "horizon.workload.index": [],
    "horizon.masters.index": [],
    "horizon.monitoring.index": [],
    "horizon.monitoring.store": [],
    "horizon.monitoring-tag.paginate": [
        {
            "name": "tag"
        }
    ],
    "horizon.monitoring-tag.destroy": [
        {
            "name": "tag"
        }
    ],
    "horizon.jobs-metrics.index": [],
    "horizon.jobs-metrics.show": [
        {
            "name": "id"
        }
    ],
    "horizon.queues-metrics.index": [],
    "horizon.queues-metrics.show": [
        {
            "name": "id"
        }
    ],
    "horizon.jobs-batches.index": [],
    "horizon.jobs-batches.show": [
        {
            "name": "id"
        }
    ],
    "horizon.jobs-batches.retry": [
        {
            "name": "id"
        }
    ],
    "horizon.pending-jobs.index": [],
    "horizon.completed-jobs.index": [],
    "horizon.silenced-jobs.index": [],
    "horizon.failed-jobs.index": [],
    "horizon.failed-jobs.show": [
        {
            "name": "id"
        }
    ],
    "horizon.retry-jobs.show": [
        {
            "name": "id"
        }
    ],
    "horizon.jobs.show": [
        {
            "name": "id"
        }
    ],
    "horizon.index": [
        {
            "name": "view"
        }
    ],
    "sanctum.csrf-cookie": [],
    "telescope": [
        {
            "name": "view"
        }
    ],
    "livewire.update": [],
    "livewire.upload-file": [],
    "livewire.preview-file": [
        {
            "name": "filename"
        }
    ],
    "log-viewer.hosts": [],
    "log-viewer.folders": [],
    "log-viewer.folders.request-download": [
        {
            "name": "folderIdentifier"
        }
    ],
    "log-viewer.folders.clear-cache": [
        {
            "name": "folderIdentifier"
        }
    ],
    "log-viewer.folders.delete": [
        {
            "name": "folderIdentifier"
        }
    ],
    "log-viewer.files": [],
    "log-viewer.files.request-download": [
        {
            "name": "fileIdentifier"
        }
    ],
    "log-viewer.files.clear-cache": [
        {
            "name": "fileIdentifier"
        }
    ],
    "log-viewer.files.delete": [
        {
            "name": "fileIdentifier"
        }
    ],
    "log-viewer.files.clear-cache-all": [],
    "log-viewer.files.delete-multiple-files": [],
    "log-viewer.logs": [],
    "log-viewer.folders.download": [
        {
            "name": "folderIdentifier"
        }
    ],
    "log-viewer.files.download": [
        {
            "name": "fileIdentifier"
        }
    ],
    "log-viewer.index": [
        {
            "name": "view"
        }
    ],
    "ignition.healthCheck": [],
    "ignition.executeSolution": [],
    "ignition.updateConfig": [],
    "api.locations.countries": [],
    "api.locations.states": [
        {
            "name": "country",
            "binding": "iso2"
        }
    ],
    "api.locations.cities": [
        {
            "name": "state",
            "binding": "id"
        }
    ],
    "api.categories": [],
    "api.verify-promo-code": [],
    "index.dashboard": [],
    "index.category": [
        {
            "name": "category",
            "binding": "slug"
        }
    ],
    "goods.search": [],
    "goods.index": [
        {
            "name": "category",
            "binding": "slug"
        }
    ],
    "goods.good.general": [
        {
            "name": "good",
            "binding": "slug"
        }
    ],
    "goods.good.properties": [
        {
            "name": "good",
            "binding": "slug"
        }
    ],
    "goods.good.reviews": [
        {
            "name": "good",
            "binding": "slug"
        }
    ],
    "cart.store": [
        {
            "name": "good",
            "binding": "slug"
        }
    ],
    "cart.update": [
        {
            "name": "good",
            "binding": "slug"
        }
    ],
    "cart.delete": [
        {
            "name": "good",
            "binding": "slug"
        }
    ],
    "cart.bulk-delete": [],
    "checkout.index": [],
    "checkout.store": [],
    "checkout.success": [],
    "checkout.cancel": [],
    "profile.personal-information.edit": [],
    "profile.personal-information.update": [],
    "profile.personal-information.destroy": [],
    "profile.address.store": [],
    "profile.address.update": [
        {
            "name": "address",
            "binding": "id"
        }
    ],
    "profile.address.patch": [
        {
            "name": "address",
            "binding": "id"
        }
    ],
    "profile.address.destroy": [
        {
            "name": "address",
            "binding": "id"
        }
    ],
    "profile.orders": [],
    "profile.wishlist": [],
    "profile.messages": [],
    "profile.reviews": [],
    "profile.wallet": [],
    "profile.wallet.store": [],
    "profile.wallet.update": [],
    "profile.wallet.delete": [],
    "register": [],
    "login": [],
    "password.request": [],
    "password.email": [],
    "password.reset": [
        {
            "name": "token"
        }
    ],
    "password.store": [],
    "social": [
        {
            "name": "provider"
        }
    ],
    "social.callback": [
        {
            "name": "provider"
        }
    ],
    "verification.notice": [],
    "verification.verify": [
        {
            "name": "id"
        },
        {
            "name": "hash"
        }
    ],
    "verification.send": [],
    "password.confirm": [],
    "password.update": [],
    "logout": []
}
}
export {};
